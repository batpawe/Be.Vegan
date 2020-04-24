<ContainerRecipes>
<ImageRecipes
  src={props.recipe.recipe_foto}
  style={{ width: "60%", cursor: "pointer" }}
  onClick={() => props.historyProps.push(`/recipe/${props.recipe.id}`)}
/>
<ContentContainer
  style={{
    width: "38%",
    background: "rgba(255,255,255,0.6)",
    position: "relative",
  }}
>
  <RecipesName style={{ "font-size": "14px" }}>
    {props.recipe.recipe_name}
  </RecipesName>
  <div
    style={{
      display: "flex",
      "justify-content": "space-between",
      width: "100%",
      "font-size": "12px",
      "white-space": "nowrap",
    }}
  >
    <p style={{ color: "#4CAF50", "font-weight": "bold" }}>
      Czas przygotowania:
    </p>
    <p
      style={{ "font-weight": "bold" }}
    >{`${props.recipe.time} minut`}</p>
  </div>
  {page[props.index] == 0 ? (
    <div>
      <HeaderText>Składniki:</HeaderText>
      <UnorderedList
        style={{
          "max-height": "140px",
          overflow: "auto",
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        {listIngredients &&
          listIngredients.map((ingredient) => {
            return (
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  display: "flex",
                  "justify-content": "space-between",
                }}
              >
                <Item style={{ "font-size": "10px" }}>
                  {ingredient.name}
                </Item>
                <Item style={{ "font-size": "10px" }}>
                  {ingredient.amount}
                </Item>
              </ul>
            );
          })}
      </UnorderedList>
    </div>
  ) : (
    <div>
      <HeaderText>Sposób przyrządzenia:</HeaderText>
      <UnorderedList
        style={{
          "max-height": "140px",
          overflow: "auto",
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <WayItem style={{ width: "80%", "white-space": "pre-wrap" }}>
          {props.recipe.recipe_decription &&
            props.recipe.recipe_decription
              .replace("\r\n\r\n", "\n")
              .replace("\r\n", "\n")}
        </WayItem>
      </UnorderedList>
    </div>
  )}
  
  <Paggination index={props.index} />
  </ContentContainer>
  </ContainerRecipes>    {/*}
      <div style={{ width: "30%" }}>
        <img
          style={{ width: "100%", height: "80%", cursor: "pointer" }}
          src={props.recipe.recipe_foto}
        />
        <p style={{ "font-size": "18px" }}>{props.recipe.recipe_name}</p>
      </div>
    {*/}