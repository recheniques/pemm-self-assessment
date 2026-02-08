import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface AccessKeyAuthProps {
  onAuthenticated: (isPremium: boolean) => void;
}

export function AccessKeyAuth({ onAuthenticated }: AccessKeyAuthProps) {
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);

  const handleFreemiumAccess = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.setItem('pemm_access_type', 'freemium');
    onAuthenticated(false);
  };

  const handlePremiumSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    // Clave única para Premium
    const PREMIUM_KEY = 'PEMM2025PREMIUM';

    if (accessKey === PREMIUM_KEY) {
      localStorage.setItem('pemm_access_type', 'premium');
      localStorage.setItem('pemm_access_key', accessKey);
      onAuthenticated(true);
    } else {
      setError('Clave de acceso inválida');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-editorial-sand flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-montserrat font-bold text-executive-forest">
              PEMM Self-Assessment
            </h1>
            <p className="text-sm text-muted-foreground">
              Diagnóstico de Madurez en Ingeniería de Prompts
            </p>
          </div>

          {!showKeyInput ? (
            <div className="space-y-4">
              <p className="text-sm text-carbon-ink text-center">
                Elige tu tipo de acceso:
              </p>

              <Button
                onClick={handleFreemiumAccess}
                disabled={isLoading}
                className="w-full bg-executive-forest hover:bg-executive-forest/90 text-white py-3 rounded-lg font-semibold"
              >
                Acceso Freemium
              </Button>

              <Button
                onClick={() => setShowKeyInput(true)}
                variant="outline"
                className="w-full py-3 rounded-lg font-semibold"
              >
                Tengo Clave Premium
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Freemium: Diagnóstico básico + Gráfico Radar
                <br />
                Premium: Diagnóstico completo + Protocolo de 7 días
              </p>
            </div>
          ) : (
            <form onSubmit={handlePremiumSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-carbon-ink mb-2">
                  Clave Premium
                </label>
                <input
                  type="password"
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  placeholder="Ingresa tu clave premium"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-executive-forest"
                  disabled={isLoading}
                  autoFocus
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => {
                    setShowKeyInput(false);
                    setAccessKey('');
                    setError('');
                  }}
                  variant="outline"
                  className="flex-1"
                  disabled={isLoading}
                >
                  Atrás
                </Button>
                <Button
                  type="submit"
                  disabled={!accessKey.trim() || isLoading}
                  className="flex-1 bg-executive-forest hover:bg-executive-forest/90 text-white py-3 rounded-lg font-semibold"
                >
                  {isLoading ? 'Verificando...' : 'Acceder'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
}
