import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import GameCard from "~/components/GameCard";
import TopBar from "~/components/TopBar";
import BottomBar from "~/components/BottomBar";
import LargeCard from "~/components/LargeCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      releaseDate: true,
      imageUrl: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  });

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-8 grid grid-cols-3 gap-8">
      <TopBar></TopBar>
      <LargeCard></LargeCard>
      {games.map((game) => (
        <div key={game.id}>
          <GameCard
            key={game.id}
            title={game.title}
            releaseDate={game.releaseDate}
            category={game.category?.title || "Unknown"}
            imgUrl={
              game.imageUrl ? game.imageUrl : "app\\assets\\Png\\Hornet.png"
            }
          />
        </div>
      ))}
      <BottomBar></BottomBar>
    </div>
  );
}
