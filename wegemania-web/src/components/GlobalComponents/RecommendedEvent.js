import { users } from "../../temp/users";
import React from "react";
import {
    UsersRankingStyled,
    UsersItem
} from "../../styles/PostStyle";
import { LocalContainer } from '../../styles/GlobalStyle'
export const RecommendedEvent = () => {
    const usersSorted = users.sort((a, b) => (a.score < b.score ? 1 : -1));
    const listUsers = usersSorted.slice(0, 4).map(({ id, name, score }) => (
        <UsersRankingStyled>
            <li>{name}</li>
            <UsersItem>{score}</UsersItem>
        </UsersRankingStyled>
    ));
    return (
        <LocalContainer>
            Polecana Restauracje :{listUsers}
        </LocalContainer>
    );
};
