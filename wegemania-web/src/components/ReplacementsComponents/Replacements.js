import React, { useContext } from "react";
import ProductImage from "../../images/product.jpg";
import { NewLoginInfo } from "../../context/LoginInfo";
import {
  Container,
  UnorderedList,
  ColumnContainer,
  OrderedList,
  BorderText,
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
  MainContainer
} from "../../styles/WallStyle";
import { Image } from "../../styles/ReplacementsStyle";
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
const Replacements = () => {
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
        <OrderedList>
          <UnorderedList>
            <ColumnContainer>
              <div>
                <UnorderedListIn>
                  <Item>
                    <HighlightItem>Produkt2</HighlightItem>
                  </Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                </UnorderedListIn>
              </div>
              <div>
                <UnorderedListIn>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
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
            <ColumnContainer>
              <div>
                <UnorderedListIn>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                </UnorderedListIn>
              </div>
              <div>
                <UnorderedListIn>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                  <Item>Produkt2</Item>
                  <Item>
                    <Image src={ProductImage} />
                  </Item>
                </UnorderedListIn>
              </div>
            </ColumnContainer>
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
export default Replacements;
