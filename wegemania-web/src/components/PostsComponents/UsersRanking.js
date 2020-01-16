import { users } from "../../temp/users";
import React from "react";
import {
  UsersRankingStyled,
  UsersItem,
  OrderedUsersList
} from "../../styles/PostStyle";
export const UsersRanking = () => {
  const usersSorted = users.sort((a, b) => (a.score < b.score ? 1 : -1));
  const listUsers = usersSorted.slice(0, 4).map(({ id, name, score }) => (
    <UsersRankingStyled>
      <li>{name}</li>
      <UsersItem>{score}</UsersItem>
    </UsersRankingStyled>
  ));
  return (
    <OrderedUsersList>
      Najlepsi użytkownicy dzisiaj :{listUsers}
    </OrderedUsersList>
  );
};
