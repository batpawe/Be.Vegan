import React, { useContext } from "react";
import ProductImage from "../../images/product.jpg";
import { NewLoginInfo } from "../../context/LoginInfo";
import {
  Container,
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
  Image,
  UnorderedListIn,
  Item,
  UnorderedListComments,
  HighlightItem,
  CommentContent,
  HeaderText,
  UnorderedListCommentsIn,
  HyperLink,
  TextInput,
  SubmitCommentButton,
  CommentContainer,
  MainContainer,
  ProductAttributes,
  AttributeItem
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import RestaurantImage from "../../images/restaurant.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import {
  SearchPanel,
  SearchInput,
  SearchButton
} from "../../styles/GlobalStyle";
import "../../styles/MenuLoginStyle.css";
import { AddPostPageContainer, AddPostPageLink } from "../../styles/PostStyle";
const Products = () => {
  const user = useContext(NewLoginInfo);

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
          <AddPostPageLink to="/addproduct">Dodaj produkt</AddPostPageLink>
        </SearchPanel>
        <OrderedList>
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>Produkt1</HighlightItem>
            </Item>
            <ProductAttributes>
              <AttributeItem>
                <b>kaloryczność:</b> 0 kcal
              </AttributeItem>
              <AttributeItem>
                <b>cukry dodatkowe:</b> 0 gram
              </AttributeItem>
              <AttributeItem>
                <b>tłuszcz:</b> 0 gram
              </AttributeItem>
              <AttributeItem>
                <b>ilość:</b>0{" "}
              </AttributeItem>
            </ProductAttributes>
            <Item>
              <BorderText>Gdzie można kupić : </BorderText>
              <Map
                id="mapid"
                center={[53.009794, 18.591649]}
                zoom={12}
                style={{
                  width: 400,
                  height: 300,
                  "z-index": 0,
                  display: "block",
                  margin: "auto"
                }}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[53.009794, 18.591649]}>
                  <Popup>Sklep1</Popup>
                </Marker>
                <Marker position={[53.005794, 18.591649]}>
                  <Popup>Sklep2</Popup>
                </Marker>
              </Map>
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Można zastąpić:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                </UnorderedListIn>
              </div>
              <div>
                <Item>
                  <BorderText>Wypróbuj w przepisach: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
            <Image src={ProductImage} />
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
          <UnorderedList>
            <Item>
              <BorderText>Nazwa : </BorderText>
              <HighlightItem>Restauracja1</HighlightItem>
            </Item>
            <Item>
              <BorderText>Cena od: </BorderText>12zł
            </Item>
            <Item>
              <BorderText>Lokalizacja : </BorderText>
              <Map
                id="mapid"
                center={[53.009794, 18.591649]}
                zoom={12}
                style={{
                  width: 400,
                  height: 300,
                  "z-index": 0,
                  display: "block",
                  margin: "auto"
                }}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[53.009794, 18.591649]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
            </Item>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Można zastąpić:</BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                  <Item>Produkt2</Item>
                </UnorderedListIn>
              </div>
              <div>
                <Item>
                  <BorderText>Wypróbuj w przepisach: </BorderText>
                </Item>
                <UnorderedListIn>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                  <Item>Przepis1</Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
            <Image src={ProductImage} />
            <HeaderText>Komentarze:</HeaderText>
            <UnorderedListComments>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <UnorderedListCommentsIn>
                <HighlightItem>Autor</HighlightItem>
                <CommentContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CommentContent>
              </UnorderedListCommentsIn>
              <HyperLink to="/">ZOBACZ WIĘCEJ KOMENTARZY</HyperLink>
              <CommentContainer>
                <TextInput
                  type="text"
                  placeholder="Wprowadź treść komentarza"
                />
                <SubmitCommentButton type="submit">
                  Dodaj komentarz
                </SubmitCommentButton>
              </CommentContainer>
            </UnorderedListComments>
          </UnorderedList>
        </OrderedList>
      </Container>
      <RightPanel />
    </MainContainer>
  );
};
export default Products;
