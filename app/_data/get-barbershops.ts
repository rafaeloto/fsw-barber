"use server"

import { db } from "../_lib/prisma"

export const getBarbershops = async () => {
  return db.barbershop.findMany({})
}

export const getPopularBarbershops = async () => {
  return db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
}

interface getBarbershopsByNameOrServiceParams {
  title?: string
  service?: string
}

export const getBarbershopsByTitleOrService = async ({
  title,
  service,
}: getBarbershopsByNameOrServiceParams) => {
  return db.barbershop.findMany({
    where: {
      OR: [
        title
          ? {
              name: {
                contains: title,
                mode: "insensitive",
              },
            }
          : {},
        service
          ? {
              services: {
                some: {
                  name: {
                    contains: service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })
}

interface getBarbershopParams {
  id: string
}

export const getBarbershop = async ({ id }: getBarbershopParams) => {
  return db.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
      services: true,
    },
  })
}
