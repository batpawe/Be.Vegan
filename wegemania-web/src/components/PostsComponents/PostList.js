import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CommentsLoading } from "./CommentsLoading";
import { UserList } from "./UserList";
import axios from "axios";
import "../../styles/MenuLoginStyle.css";
import {
  UnorderedPost,
  PostAuthor,
  PostSubject,
  PostContent,
  UserControl,
  Image,
  UnorderedImage,
  PostLink,
  ListPostOptions,
  Comments,
  WallHeader,
  SortPost,
  SortOption,
  StarContent,
  ContainerPosts
} from "../../styles/PostStyle";
import edit_regular from "../../icons/edit.svg";
import edit_solid from "../../icons/edit_solid.svg";
import plus_regular from "../../icons/plus.svg";
import plus_solid from "../../icons/plus_solid.svg";
import trash_regular from "../../icons/trash.svg";
import trash_solid from "../../icons/trash_solid.svg";
import star from "../../icons/star.svg";
import star_clicked from "../../icons/star_1.svg";
import { NewNotifyContext } from "../../context/Notify";
export const PostList = () => {
  /*
    <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={setRating.bind(this)}
                  onStarHover={setRating.bind(this)}
                  renderStarIcon={() => <span>✰</span>}
                />
                */
  const [items, setItems] = useState([]);
  const starsContent = [star, star, star, star, star];
  const [starsArray, setStarsArray] = useState([[], []]);
  const [allPosts, setAllPosts] = useState([]);
  const [apiLink, setApiLink] = useState("http://localhost:3001/posts");
  const [hasMore, setHasMore] = useState(true);
  const notify = useContext(NewNotifyContext);
  const FetchMoreData = () => {
    setTimeout(() => {
      setItems(allPosts.slice(0, items.length + 2));
    }, 1000);
    setStarsArray(
      Array.from(Array(items.length + 2), () => new Array(...starsContent))
    );
    if (items.length === allPosts.length) {
      setHasMore(false);
    }
  };
  const sortPosts = event => {
    if (event.target.value === "new") {
      setApiLink("http://localhost:3001/bestposts");
    } else {
      setApiLink("http://localhost:3001/posts");
    }
  };
  const hoverElement = (id, event) => {
    let temp = starsArray;

    for (var i = 0; i < event.target.id; i++) {
      temp[id - 1][i] = star_clicked;
    }
    setStarsArray([...temp]);
  };
  const ratePost = (id, event) => {
    let temp = starsArray;
    for (var i = 0; i < event.target.id; i++) {
      temp[id - 1][i] = star_clicked;
    }
    notify.set("Dodano ocenę o wartości " + event.target.id + "/5 do posta");
    setStarsArray([...temp]);
    setTimeout(clearNotify, 3000);
  };
  const hoverClear = id => {
    let temp = starsArray;
    for (var i = 0; i < 5; i++) {
      temp[id - 1][i] = star;
    }
    setStarsArray([...temp]);
    //   forceUpdate(n => !n);
  };
  const clearNotify = () => {
    notify.set("");
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiLink);
      setAllPosts(result.data);
      setItems(result.data.slice(0, 3));
      //result.data.slive(0,3).length
      let temp = Array.from(
        Array(result.data.slice(0, 3).length),
        () => new Array(...starsContent)
      );

      setStarsArray(temp);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiLink]);
  return (
    <ContainerPosts>
      <InfiniteScroll
        dataLength={items.length}
        next={FetchMoreData}
        hasMore={hasMore}
        loader={<h4>Ładowanie...</h4>}
      >
        <WallHeader>
          <SortPost onChange={sortPosts}>
            <SortOption value="best">Najlepsze</SortOption>
            <SortOption value="new">Najnowsze</SortOption>
          </SortPost>
          <PostLink to="/addpost">Dodaj post</PostLink>
        </WallHeader>

        {items.map(({ idposts, autor, tytul, content, wynik }) => (
          <UnorderedPost>
            <PostAuthor>
              <UserList by={autor} />
            </PostAuthor>
            <PostSubject>{tytul}</PostSubject>
            <PostContent>{content}</PostContent>

            <UnorderedImage>
              {starsArray[idposts - 1] && (
                <StarContent>
                  <ListPostOptions>
                    <Image
                      src={starsArray[idposts - 1][0]}
                      id="1"
                      idposts={idposts}
                      alt="oceń pozytywnie post"
                      onMouseOver={event => hoverElement(idposts, event)}
                      onMouseOut={() => hoverClear(idposts)}
                      onClick={event => ratePost(idposts, event)}
                    />
                  </ListPostOptions>
                  <ListPostOptions>
                    <Image
                      src={starsArray[idposts - 1][1]}
                      idposts={idposts}
                      id="2"
                      alt="oceń pozytywnie post"
                      onMouseOver={event => hoverElement(idposts, event)}
                      onMouseOut={() => hoverClear(idposts)}
                      onClick={event => ratePost(idposts, event)}
                    />
                  </ListPostOptions>
                  <ListPostOptions>
                    <Image
                      src={starsArray[idposts - 1][2]}
                      idposts={idposts}
                      id="3"
                      alt="oceń pozytywnie post"
                      onMouseOver={event => hoverElement(idposts, event)}
                      onMouseOut={() => hoverClear(idposts)}
                      onClick={event => ratePost(idposts, event)}
                    />
                  </ListPostOptions>
                  <ListPostOptions>
                    <Image
                      src={starsArray[idposts - 1][3]}
                      idposts={idposts}
                      id="4"
                      alt="oceń pozytywnie post"
                      onMouseOver={event => hoverElement(idposts, event)}
                      onMouseOut={() => hoverClear(idposts)}
                      onClick={event => ratePost(idposts, event)}
                    />
                  </ListPostOptions>
                  <ListPostOptions>
                    <Image
                      src={starsArray[idposts - 1][4]}
                      idposts={idposts}
                      id="5"
                      alt="oceń pozytywnie post"
                      onMouseOver={event => hoverElement(idposts, event)}
                      onMouseOut={() => hoverClear(idposts)}
                      onClick={event => ratePost(idposts, event)}
                    />
                  </ListPostOptions>
                </StarContent>
              )}
              <ListPostOptions flex="flex">{wynik}</ListPostOptions>
              <ListPostOptions>
                <Image src={edit_regular} alt="edytuj post" name={edit_solid} />
              </ListPostOptions>
              <ListPostOptions>
                <Image src={trash_regular} alt="usun post" name={trash_solid} />
              </ListPostOptions>
              <ListPostOptions>
                <Image
                  src={plus_regular}
                  alt="dodaj komentarz"
                  name={plus_solid}
                />
              </ListPostOptions>
            </UnorderedImage>

            <UnorderedImage>
              <Comments>
                Komentarze : <hr />
              </Comments>
            </UnorderedImage>
            <UserControl>
              <CommentsLoading id={idposts} />
            </UserControl>
          </UnorderedPost>
        ))}
      </InfiniteScroll>
    </ContainerPosts>
  );
};
