import React, { useState, Suspense, lazy } from 'react';
import { ViewState, SongRequestData } from './types';
import { LandingPage } from './components/landing/LandingPage';
import { Loader2 } from 'lucide-react';

// Lazy load heavy route components
// We use the .then helper because these components use named exports
const QuizFlow = lazy(() => import('./components/quiz/QuizFlow').then(module => ({ default: module.QuizFlow })));
const CheckoutPage = lazy(() => import('./components/checkout/CheckoutPage').then(module => ({ default: module.CheckoutPage })));

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-light">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
      <p className="text-brand-secondary font-serif">Carregando...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [songData, setSongData] = useState<SongRequestData | null>(null);

  const startQuiz = () => {
    setCurrentView('quiz');
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (data: SongRequestData) => {
    setSongData(data);
    setCurrentView('checkout');
    window.scrollTo(0, 0);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  const handleBackToQuiz = () => {
    setCurrentView('quiz');
  };

  return (
    <div className="antialiased font-sans text-gray-800 bg-brand-light min-h-screen">
      {/* Landing Page is Eager (Loaded immediately) */}
      {currentView === 'landing' && (
        <LandingPage onStart={startQuiz} />
      )}
      
      {/* Other routes are wrapped in Suspense for Code Splitting */}
      <Suspense fallback={<LoadingScreen />}>
        {currentView === 'quiz' && (
          <QuizFlow 
            onComplete={handleQuizComplete} 
            onBack={handleBackToLanding} 
          />
        )}

        {currentView === 'checkout' && songData && (
          <CheckoutPage 
            data={songData} 
            onBack={handleBackToQuiz} 
          />
        )}
      </Suspense>
    </div>
  );
};

export default App;