import { Info } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import Link from "next/link";

export const ProjectInfo = () => {
  return (
    <div className="bg-muted p-4 mt-auto">
      <Alert className="bg-muted text-muted-foreground border-0">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription>
          Это прототип демонстрирует интерфейс взаимодействия с Корпоративным Хранилищем Данных 
          на естественном языке. Система преобразует ваши запросы в SQL и автоматически создает 
          визуализации результатов. Данные можно экспортировать в Excel для дальнейшего анализа. 
          В демо используется датасет компаний-единорогов от{" "}
          <Link
            href="https://www.cbinsights.com/research-unicorn-companies"
            target="_blank"
            className="text-primary hover:text-primary/90 underline"
          >
            CB Insights
          </Link>
          .
        </AlertDescription>
      </Alert>
    </div>
  );
};
