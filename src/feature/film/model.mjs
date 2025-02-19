import { PrismaClient } from "@prisma/client/extension";
import { skip } from "@prisma/client/runtime/library";
const prisma = new PrismaClient();

// 여러개 조회할 때는 pagination 기능을 넣는다.
export const filmFindMany = async (pageStart, pageEnd) => {
    return prisma.film.findMany({
        skip: pageStart,
        take: pageEnd,
    });
};

export const filmFindOne = async (film_id) => {
    return prisma.film.findUnique({
        where: {
            film_id: film_id,
        },
    })
};

