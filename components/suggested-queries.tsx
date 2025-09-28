import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const SuggestedQueries = ({
  handleSuggestionClick,
}: {
  handleSuggestionClick: (suggestion: string) => void;
}) => {
  const suggestionQueries = [
    {
      desktop:
        "Сравните количество единорогов в Сан-Франциско и Нью-Йорке во времени",
      mobile: "Сравнить Сан-Франциско и Нью-Йорк",
    },
    {
      desktop: "Сравните оценки единорогов в США и Китае во времени",
      mobile: "Сравнить США и Китай",
    },
    {
      desktop: "Страны с наибольшей плотностью единорогов",
      mobile: "Топ страны",
    },
    {
      desktop:
        "Покажите количество единорогов, основанных каждый год за последние два десятилетия",
      mobile: "Годовой подсчет",
    },
    {
      desktop: "Отобразите совокупную общую оценку единорогов во времени",
      mobile: "Общая стоимость",
    },
    {
      desktop:
        "Сравните годовые объемы финансирования для единорогов финтех против медтех",
      mobile: "Финтех против медтех",
    },
    {
      desktop: "Какие города имеют больше всего SaaS единорогов",
      mobile: "SaaS города",
    },
    {
      desktop: "Покажите страны с наибольшим количеством единорогов",
      mobile: "Количество по странам",
    },
    {
      desktop:
        "Покажите количество единорогов (сгруппированных по годам) за последнее десятилетие",
      mobile: "Тренд десятилетия",
    },
    {
      desktop: "Сравните среднюю оценку AI компаний против биотех компаний",
      mobile: "ИИ против биотех",
    },
    {
      desktop: "Инвесторы с наибольшим количеством единорогов",
      mobile: "Топ инвесторы",
    },
  ];

  return (
    <motion.div
      key="suggestions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      exit={{ opacity: 0 }}
      className="h-full overflow-y-auto"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
        Попробуйте эти запросы:
      </h2>
      <div className="flex flex-wrap gap-2">
        {suggestionQueries.map((suggestion, index) => (
          <Button
            key={index}
            className={index > 5 ? "hidden sm:inline-block" : ""}
            type="button"
            variant="outline"
            onClick={() => handleSuggestionClick(suggestion.desktop)}
          >
            <span className="sm:hidden">{suggestion.mobile}</span>
            <span className="hidden sm:inline">{suggestion.desktop}</span>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
