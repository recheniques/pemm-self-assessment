import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AssessmentResult } from './types';

export async function generatePEMMReport(
  result: AssessmentResult,
  userName: string,
  radarChartElement: HTMLElement
): Promise<void> {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageHeight = pdf.internal.pageSize.getHeight();
  const pageWidth = pdf.internal.pageSize.getWidth();
  let yPosition = 20;

  // Set fonts
  const titleFont = 'Montserrat';
  const bodyFont = 'Inter';

  // Header
  pdf.setFontSize(10);
  pdf.setTextColor(26, 58, 50);
  pdf.text('EXPERIENCE ASSET LABS', 20, yPosition);
  yPosition += 10;

  // Title
  pdf.setFontSize(24);
  pdf.setFont(titleFont, 'bold');
  pdf.text('PEMM: Prompt Engineering Maturity Model', 20, yPosition);
  yPosition += 8;

  pdf.setFontSize(14);
  pdf.setFont(titleFont, 'bold');
  pdf.text('Diagnóstico de Madurez Operacional', 20, yPosition);
  yPosition += 15;

  // User Info
  pdf.setFontSize(11);
  pdf.setFont(bodyFont, 'normal');
  pdf.setTextColor(44, 44, 44);
  pdf.text(`Usuario: ${userName}`, 20, yPosition);
  yPosition += 6;
  pdf.text(`Nivel de Madurez: ${result.level}`, 20, yPosition);
  yPosition += 6;
  pdf.text(`Puntaje Total: ${result.totalScore}/50`, 20, yPosition);
  yPosition += 15;

  // Radar Chart
  if (radarChartElement) {
    const canvas = await html2canvas(radarChartElement, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 150;
    const imgHeight = 120;
    const xPosition = (pageWidth - imgWidth) / 2;
    pdf.addImage(imgData, 'PNG', xPosition, yPosition, imgWidth, imgHeight);
    yPosition += imgHeight + 10;
  }

  // Add new page for content
  pdf.addPage();
  yPosition = 20;

  // Level Description
  pdf.setFontSize(14);
  pdf.setFont(titleFont, 'bold');
  pdf.setTextColor(26, 58, 50);
  pdf.text(`Nivel ${result.level}: Tu Diagnóstico`, 20, yPosition);
  yPosition += 10;

  // Weaknesses
  pdf.setFontSize(12);
  pdf.setFont(titleFont, 'bold');
  pdf.setTextColor(44, 44, 44);
  pdf.text('Áreas de Mayor Debilidad:', 20, yPosition);
  yPosition += 8;

  pdf.setFontSize(10);
  pdf.setFont(bodyFont, 'normal');
  result.weaknesses.forEach((weakness, index) => {
    pdf.text(`${index + 1}. ${weakness.label}: ${weakness.score.toFixed(1)}/5`, 25, yPosition);
    yPosition += 6;
  });

  yPosition += 5;

  // Strengths
  pdf.setFontSize(12);
  pdf.setFont(titleFont, 'bold');
  pdf.setTextColor(44, 44, 44);
  pdf.text('Fortalezas Actuales:', 20, yPosition);
  yPosition += 8;

  pdf.setFontSize(10);
  pdf.setFont(bodyFont, 'normal');
  result.strengths.forEach((strength, index) => {
    pdf.text(`${index + 1}. ${strength.label}: ${strength.score.toFixed(1)}/5`, 25, yPosition);
    yPosition += 6;
  });

  // Download
  pdf.save(`PEMM-Assessment-${userName}-${new Date().toISOString().split('T')[0]}.pdf`);
}
