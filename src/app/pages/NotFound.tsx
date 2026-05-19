import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-9xl text-[#EC7036] mb-4">404</div>
          <h1 className="mb-4">Страница не найдена</h1>
          <p className="text-xl text-gray-400">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#EC7036] rounded-lg hover:bg-[#d66330] transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>На главную</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад</span>
          </button>
        </div>
      </div>
    </div>
  );
}
