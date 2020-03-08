import React, { useState } from "react";
import { MainContainer } from "../../styles/WallStyle";
import {
  Container,
  ReplacementsName,
  HeaderText,
  ContainerReplacements,
  ImageReplacements,
  ContentContainer,
  UnorderedList,
  PagginationContainer,
  PagginationItem,
  Item,
  WayItem,
  ReplacementsImage,
  OuterUnorderedList,
  InnerUnorderedList
} from "../../styles/TempReplacements";
import { Scrollbars } from "react-custom-scrollbars";
import RightPanel from "../GlobalComponents/RightPanel";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "../../images/dinner.jpg";
import { withRouter } from "react-router";
import {
  SearchPanel,
  SearchInput,
  SearchButton
} from "../../styles/GlobalStyle";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
const Replacements = props => {
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
      <ContainerReplacements>
        <ImageReplacements
          src={Image}
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => props.historyProps.push("/replacement")}
        />
        <ContentContainer style={{ width: "38%", background: "white" }}>
          <ReplacementsName>Przepis</ReplacementsName>
          {console.log(page[props.index])}
          {page[props.index] == 0 ? (
            <div>
              <HeaderText>Zamienniki:</HeaderText>
              <Scrollbars style={{ width: 165, height: 200 }}>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
              </Scrollbars>
            </div>
          ) : (
            <div>
              <HeaderText>Zamienniki:</HeaderText>
              <Scrollbars style={{ width: 165, height: 200 }}>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
                <UnorderedList>
                  <OuterUnorderedList>
                    <InnerUnorderedList>
                      <WayItem>Zamiennik1</WayItem>
                      <WayItem>kaloryczność:</WayItem>
                      <WayItem>proteiny:</WayItem>
                      <WayItem>tłuszcz:</WayItem>
                      <WayItem>węglowodany</WayItem>
                      <WayItem>celuluoza</WayItem>
                    </InnerUnorderedList>
                    <ReplacementsImage src={Image} />
                  </OuterUnorderedList>
                </UnorderedList>
              </Scrollbars>
            </div>
          )}

          <Paggination index={props.index} />
        </ContentContainer>
      </ContainerReplacements>
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
          <AddPostPageLink to="/addreplacement">
            Dodaj zamiennik
          </AddPostPageLink>
        </SearchPanel>
        <ContentController index={0} historyProps={props.history} />
        <ContentController index={1} historyProps={props.history} />
        <ContentController index={2} historyProps={props.history} />
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default withRouter(Replacements);
