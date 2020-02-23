import React, { useContext, useState } from "react";
import { NewLoginInfo } from "../../context/LoginInfo";
import "../../styles/MenuLoginStyle.css";
import { Redirect } from "react-router";
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
  HeaderRecipe,
  CommentContainer,
  MainContainer,
  PreparingMethod,
  ItemHeaderRecipe,
  HiglightItemHeaderRecipe,
  HeaderItem,
  HeaderList
} from "../../styles/WallStyle";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import DinnerImage from "../../images/dinner.jpg";
import RestaurantImage from "../../images/restaurant.jpg";
import ShopImage from "../../images/shop.jpg";
import PostImage from "../../images/postimage.jpg";
import RightPanel from "../GlobalComponents/RightPanel";
import {
  HeaderRecipeContainer,
  RecipeTimeContainer,
  HeaderRecipeText,
  RecipeTime,
  IngredientsList,
  IngredientsItem,
  PreparationItem,
  RecipeImage
} from "../../styles/RecipeStyle";
import {
  HeaderRestaurantContainer,
  HeaderRestaurantText,
  FirstRestaurantRow,
  FirstRestaurantItem,
  RestaurantImageComponent,
  RestaurantOpenItem,
  MenuList,
  MenuItem,
  HeaderColumn
} from "../../styles/RestaurantStyle";
import {
  HeaderPostsContainer,
  HeaderPostsItem,
  HeaderPostsText,
  TagsPostsHeader,
  TagsPostsHeaderContainer,
  TagsPostsContainer,
  TagsItems,
  RateContainer,
  RateItem,
  RateStars,
  RateHeader
} from "../../styles/PostsWallStyle";
import ReactStars from "react-stars";
const Wall = () => {
  const [rating, setRating] = useState(1);
  const user = useContext(NewLoginInfo);
  return (
    <MainContainer>
      <Container>
        {user.username == "" && <Redirect to="/" />}
        <OrderedList>
          <UnorderedList>
            <HeaderRecipeContainer>
              <HeaderRecipeText>ZUPA KREM Z TOPINAMBURU</HeaderRecipeText>
            </HeaderRecipeContainer>
            <HeaderRecipeContainer>
              <RecipeTimeContainer>
                <BorderText>Czas przygotowania: </BorderText>
                <RecipeTime>45minut</RecipeTime>
              </RecipeTimeContainer>
            </HeaderRecipeContainer>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki: </BorderText>
                </Item>
                <IngredientsList>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                </IngredientsList>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <RecipeImage src={DinnerImage} />
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
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
            <HeaderRecipeContainer>
              <HeaderRecipeText>ZUPA KREM Z TOPINAMBURU</HeaderRecipeText>
            </HeaderRecipeContainer>
            <HeaderRecipeContainer>
              <RecipeTimeContainer>
                <BorderText>Czas przygotowania: </BorderText>
                <RecipeTime>45minut</RecipeTime>
              </RecipeTimeContainer>
            </HeaderRecipeContainer>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Składniki: </BorderText>
                </Item>
                <IngredientsList>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                  <IngredientsItem>Składniki</IngredientsItem>
                </IngredientsList>
              </div>
              <PreparingMethod>
                <Item>
                  <BorderText>Sposób przygotowania: </BorderText>
                </Item>
                <UnorderedListIn>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                  <PreparationItem>
                    Flexbox was designed as a single dimensional layout, meaning
                    that it deals with laying out items as a row or as a column
                    — but not both at once. There is however the ability to wrap
                    flex items onto new lines, creating new rows if
                    flex-direction is row and new columns if flex-direction is
                    column. I
                  </PreparationItem>
                </UnorderedListIn>
              </PreparingMethod>
            </ColumnContainer>
            <RecipeImage src={DinnerImage} />
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
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
            <HeaderRestaurantContainer>
              <HeaderRestaurantText>Restauracja1</HeaderRestaurantText>
            </HeaderRestaurantContainer>
            <FirstRestaurantRow>
              <FirstRestaurantItem>
                <RestaurantImageComponent src={RestaurantImage} />
              </FirstRestaurantItem>
              <FirstRestaurantItem>
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
              </FirstRestaurantItem>
            </FirstRestaurantRow>
            <ColumnContainer>
              <div>
                <Item>
                  <BorderText>Godziny otwarcia:</BorderText>
                </Item>
                <UnorderedListIn>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                  <RestaurantOpenItem>
                    Poniedziałek 8:00 - 20:00
                  </RestaurantOpenItem>
                </UnorderedListIn>
              </div>
              <PreparingMethod>
                <HeaderColumn>
                  <BorderText>Menu: </BorderText>
                </HeaderColumn>
                <MenuList>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                  <MenuItem>Produkt 8zł</MenuItem>
                </MenuList>
              </PreparingMethod>
            </ColumnContainer>
            <RateContainer>
              <RateHeader>Oceń</RateHeader>
              <RateStars>
                <ReactStars
                  style={{ left: "45%" }}
                  count={5}
                  onChange={setRating}
                  size={24}
                  color2={"#4CAF50"}
                />
              </RateStars>
            </RateContainer>
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
            <HeaderPostsContainer>
              <HeaderPostsItem>
                <HeaderPostsText>Post1</HeaderPostsText>
              </HeaderPostsItem>
              <HeaderPostsItem>Autor</HeaderPostsItem>
            </HeaderPostsContainer>
            <TagsPostsHeaderContainer>
              <li>
                <TagsPostsHeader>Tagi:</TagsPostsHeader>
              </li>
            </TagsPostsHeaderContainer>
            <TagsPostsContainer>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
              <TagsItems>tag</TagsItems>
            </TagsPostsContainer>
            <ColumnContainer>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </ColumnContainer>
            <Image src={PostImage} />
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
            <HeaderPostsContainer>
              <HeaderPostsItem>
                <HeaderPostsText>Post1</HeaderPostsText>
              </HeaderPostsItem>
              <HeaderPostsItem>Autor</HeaderPostsItem>
            </HeaderPostsContainer>
            <ColumnContainer>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </ColumnContainer>
            <Image src={PostImage} />
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
//miejsca + posty
export default Wall;
