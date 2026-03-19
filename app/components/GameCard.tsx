import { Form } from "@remix-run/react";

interface GameCardProps {
  title: string;
  releaseDate: string;
  category: string;
  imgUrl: string;
  gameID: number;
}

export default function GameCard({
  title,
  releaseDate,
  category,
  imgUrl,
  gameID,
}: GameCardProps) {
  const formattedDate = releaseDate.substring(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-72 overflow-hidden">
        <img
          src={imgUrl}
          alt={`${title} cover`}
          className="w-full object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between w-2/3">
          <h3 className="font-bold text-2xl text-slate-300">{title}</h3>
          <p className="text-cyan-300 uppercase text-sm font-semibold">
            {category}
          </p>
          <p className="text-slate-200/60 text-sm font-semibold">
            {formattedDate}
          </p>
        </div>
      </div>
      <Form action={`/delete-game/${gameID}`} method="post">
        <button
          type="submit"
          className="border-2 border-red-300 text-red-300 p-2 rounded-md transition hover:bg-red-50/10 w-full"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}
