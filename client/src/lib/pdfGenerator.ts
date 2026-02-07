import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AssessmentResult } from './types';
import { AREA_EXPLANATIONS, PROTOCOLS_BY_LEVEL } from './reportContent';

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
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  let yPosition = margin;

  pdf.setFontSize(10);
  pdf.setTextColor(26, 58, 50);
  pdf.text('EXPERIENCE ASSET LABS', margin, yPosition);
  yPosition += 8;

  pdf.setFontSize(24);
  pdf.setFont('Montserrat', 'bold');
  pdf.text('PEMM: Prompt Engineering Maturity Model', margin, yPosition);
  yPosition += 8;

  pdf.setFontSize(14);
  pdf.setFont('Montserrat', 'bold');
  pdf.text('Diagnostico de Madurez Operacional', margin, yPosition);
  yPosition += 15;

  pdf.setFontSize(11);
  pdf.setFont('Inter', 'normal');
  pdf.setTextColor(44, 44, 44);
  pdf.text(`Usuario: ${userName}`, margin, yPosition);
  yPosition += 6;
  pdf.text(`Nivel de Madurez: ${result.level}`, margin, yPosition);
  yPosition += 6;
  pdf.text(`Puntaje Total: ${result.totalScore}/50`, margin, yPosition);
  yPosition += 15;

  if (radarChartElement) {
    try {
      const canvas = await html2canvas(radarChartElement, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 140;
      const imgHeight = 110;
      const xPosition = (pageWidth - imgWidth) / 2;
      pdf.addImage(imgData, 'PNG', xPosition, yPosition, imgWidth, imgHeight);
      yPosition += imgHeight + 10;
    } catch (error) {
      console.error('Error adding radar chart:', error);
    }
  }

  pdf.addPage();
  yPosition = margin;

  pdf.setFontSize(14);
  pdf.setFont('Montserrat', 'bold');
  pdf.setTextColor(26, 58, 50);
  pdf.text(`Nivel ${result.level}: Tu Diagnostico Detallado`, margin, yPosition);
  yPosition += 8;

  pdf.setFontSize(12);
  pdf.setFont('Montserrat', 'bold');
  pdf.setTextColor(44, 44, 44);
  pdf.text('Areas de Mayor Debilidad:', margin, yPosition);
  yPosition += 6;

  result.weaknesses.forEach((weakness, index) => {
    const areaKey = weakness.area as keyof typeof AREA_EXPLANATIONS;
    const areaInfo = AREA_EXPLANATIONS[areaKey];

    pdf.setFontSize(11);
    pdf.setFont('Montserrat', 'bold');
    pdf.setTextColor(26, 58, 50);
    pdf.text(`${index + 1}. ${weakness.label}: ${weakness.score.toFixed(1)}/5`, margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(8);
    pdf.setFont('Inter', 'normal');
    pdf.setTextColor(122, 122, 122);
    
    const definition = `Definicion: ${areaInfo.definition}`;
    const wrappedDefinition = pdf.splitTextToSize(definition, contentWidth);
    pdf.text(wrappedDefinition, margin + 5, yPosition);
    yPosition += wrappedDefinition.length * 3.5 + 1;

    pdf.setTextColor(200, 50, 50);
    pdf.setFontSize(8);
    pdf.text('Implicaciones:', margin + 5, yPosition);
    yPosition += 3;

    const maxImplications = Math.min(2, areaInfo.weaknessImplications.length);
    for (let i = 0; i < maxImplications; i++) {
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(7.5);
      const wrapped = pdf.splitTextToSize(`• ${areaInfo.weaknessImplications[i]}`, contentWidth - 5);
      pdf.text(wrapped, margin + 8, yPosition);
      yPosition += wrapped.length * 3 + 0.5;
    }


    if (yPosition > pageHeight - 20) {
      pdf.addPage();
      yPosition = margin;
    }
  });

  yPosition += 3;

  pdf.setFontSize(12);
  pdf.setFont('Montserrat', 'bold');
  pdf.setTextColor(44, 44, 44);
  pdf.text('Fortalezas Actuales:', margin, yPosition);
  yPosition += 6;

  result.strengths.forEach((strength, index) => {
    const areaKey = strength.area as keyof typeof AREA_EXPLANATIONS;
    const areaInfo = AREA_EXPLANATIONS[areaKey];

    pdf.setFontSize(11);
    pdf.setFont('Montserrat', 'bold');
    pdf.setTextColor(26, 58, 50);
    pdf.text(`${index + 1}. ${strength.label}: ${strength.score.toFixed(1)}/5`, margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(8);
    pdf.setFont('Inter', 'normal');
    pdf.setTextColor(122, 122, 122);
    
    const definition2 = `Definicion: ${areaInfo.definition}`;
    const wrappedDefinition2 = pdf.splitTextToSize(definition2, contentWidth);
    pdf.text(wrappedDefinition2, margin + 5, yPosition);
    yPosition += wrappedDefinition2.length * 3.5 + 1;

    pdf.setTextColor(26, 58, 50);
    pdf.setFontSize(8);
    pdf.text('Implicaciones:', margin + 5, yPosition);
    yPosition += 3;

    const maxStrengths = Math.min(2, areaInfo.strengthImplications.length);
    for (let i = 0; i < maxStrengths; i++) {
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(7.5);
      const wrapped = pdf.splitTextToSize(`• ${areaInfo.strengthImplications[i]}`, contentWidth - 5);
      pdf.text(wrapped, margin + 8, yPosition);
      yPosition += wrapped.length * 3 + 0.5;
    }


    if (yPosition > pageHeight - 20) {
      pdf.addPage();
      yPosition = margin;
    }
  });

  pdf.addPage();
  yPosition = margin;

  const protocol = PROTOCOLS_BY_LEVEL[result.level as keyof typeof PROTOCOLS_BY_LEVEL];

  pdf.setFontSize(14);
  pdf.setFont('Montserrat', 'bold');
  pdf.setTextColor(26, 58, 50);
  pdf.text(protocol.title, margin, yPosition);
  yPosition += 7;

  pdf.setFontSize(9);
  pdf.setFont('Inter', 'normal');
  pdf.setTextColor(100, 100, 100);
  const wrappedDescription = pdf.splitTextToSize(protocol.description, contentWidth);
  pdf.text(wrappedDescription, margin, yPosition);
  yPosition += wrappedDescription.length * 3.5 + 5;

  protocol.days.forEach((dayData) => {
    if (yPosition > pageHeight - 25) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFontSize(11);
    pdf.setFont('Montserrat', 'bold');
    pdf.setTextColor(26, 58, 50);
    pdf.text(`Dia ${dayData.day}: ${dayData.title}`, margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(8);
    pdf.setFont('Inter', 'normal');
    pdf.setTextColor(44, 44, 44);
    pdf.text('Tareas:', margin + 3, yPosition);
    yPosition += 3;

    const maxTasks = Math.min(2, dayData.tasks.length);
    for (let i = 0; i < maxTasks; i++) {
      const wrapped = pdf.splitTextToSize(`• ${dayData.tasks[i]}`, contentWidth - 5);
      pdf.text(wrapped, margin + 6, yPosition);
      yPosition += wrapped.length * 2.8 + 0.5;
    }

    yPosition += 1;

    pdf.setTextColor(26, 58, 50);
    pdf.setFont('Inter', 'bold');
    pdf.text('Entregable:', margin + 3, yPosition);
    yPosition += 3;

    pdf.setFont('Inter', 'normal');
    pdf.setTextColor(100, 100, 100);
    const wrappedDeliverable = pdf.splitTextToSize(dayData.deliverable, contentWidth - 5);
    pdf.text(wrappedDeliverable, margin + 6, yPosition);
    yPosition += wrappedDeliverable.length * 2.8 + 1;

    pdf.setTextColor(122, 122, 122);
    pdf.setFontSize(7);
    pdf.text(`Tiempo: ${dayData.timeEstimate}`, margin + 3, yPosition);
    yPosition += 3;

  });

  pdf.save(`PEMM-Assessment-${userName}-${new Date().toISOString().split('T')[0]}.pdf`);
}
