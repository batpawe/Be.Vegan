//props.match.params
import React, { useState } from "react";
import { MainContainer, Container } from "../../styles/WallStyle";
import {
  RecipesName,
  HeaderText,
  ContainerRecipes,
  ImageRecipes,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item,
  WayItem
} from "../../styles/TempRecipes";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
import {
  SearchPanel,
  SearchInput,
  SearchButton
} from "../../styles/GlobalStyle";
const Recipes = props => {
  let temp = [0, 0, 0];
  const [page, setPage] = useState(temp);
  const Paggination = props => {
    let no = props.no || 2;
    const handlePage = k => {
      let tmp = page;
      console.log(k);
      if (k == 1) {
        tmp[props.index] = 1;
      } else {
        tmp[props.index] = 0;
      }
      setPage([...tmp]);
    };
    const paggin = Array.from({ length: no }, (_, k) =>
      k == page[props.index] ? (
        <PagginationItem
          key={k}
          active={true}
          onClick={() => {
            handlePage(k);
          }}
        >
          {k + 1}
        </PagginationItem>
      ) : (
        <PagginationItem
          key={k}
          onClick={() => {
            handlePage(k);
          }}
        >
          {k + 1}
        </PagginationItem>
      )
    );
    return <PagginationContainer>{paggin}</PagginationContainer>;
  };
  const ContentController = props => {
    return (
      <ContainerRecipes>
        <ImageRecipes
          src={Image}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push("/recipe")}
        />
        <ContentContainer style={{ width: "38%", background: "white" }}>
          <RecipesName>Przepis</RecipesName>
          {console.log(page[props.index])}
          {page[props.index] == 0 ? (
            <div>
              <HeaderText>Składniki:</HeaderText>
              <UnorderedList>
                <Item>Jakiś produkt</Item>
                <Item>10g</Item>
                <Item>Jakiś produkt</Item>
                <Item>10g</Item>
                <Item>Jakiś produkt</Item>
                <Item>10g</Item>
                <Item>Jakiś produkt</Item>
                <Item>10g</Item>
              </UnorderedList>
            </div>
          ) : (
            <div>
              <HeaderText>Sposób przyrządzenia:</HeaderText>
              <UnorderedList>
                <WayItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book...
                </WayItem>
              </UnorderedList>
            </div>
          )}

          <Paggination index={props.index} />
        </ContentContainer>
      </ContainerRecipes>
    );
  };
  return (
    <MainContainer>
      <Container>
        <SearchPanel>
          <div>
            <SearchInput
              type="text"
              id="ajax"
              list="json-datalist"
              placeholder="Wprowadź nazwę produktu"
            />
            <datalist id="json-datalist">
              <option value="HTML" />
              <option value="CSS" />
              <option value="JavaScript" />
              <option value="Java" />
              <option value="Ruby" />
              <option value="PHP" />
              <option value="Go" />
              <option value="Erlang" />
              <option value="Python" />
              <option value="C" />
              <option value="C#" />
              <option value="C++" />
            </datalist>
          </div>
          <SearchButton>Wyszukaj</SearchButton>
          <SearchButton to="/addrecipe">Dodaj przepis</SearchButton>
        </SearchPanel>
        <ContentController index={0} historyProps={props.history} />
        <ContentController index={1} historyProps={props.history} />
        <ContentController index={2} historyProps={props.history} />
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Recipes);
