import React, { useState } from "react";
import Header from "./Header";
import RestaurantImage from "../../images/restaurant.jpg";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import {
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
  RatingComponent,
  RatingHeader,
  ProductAttributes,
  AttributeItem
} from "../../styles/WallStyle";
import ReactStars from "react-stars";
import {
  Container,
  Icon,
  AdministrationContainer,
  AdministrationActions
} from "../../styles/AdminPanelStyle";
import AcceptImage from "../../images/tick.svg";
import DiscardImage from "../../images/discard.svg";
import ProductImage from "../../images/product.jpg";
import BinImage from "../../images/bin.svg";
const NotifyReplacements = () => {
  let temp = [2];
  const [rating, setRating] = useState(temp);
  const changeRating = val => {
    let temp = rating;
    temp[0] = val;
    setRating([...temp]);
  };
  return (
    <Container>
      <Header />
      <h2>Zgłoszone zamienniki:</h2>
      <AdministrationContainer>
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
        </OrderedList>
        <AdministrationActions>
          <Icon src={AcceptImage} />
          <Icon src={BinImage} />
        </AdministrationActions>
      </AdministrationContainer>
    </Container>
  );
};
export default NotifyReplacements;
