//In javascript by using keyword export 
//we can export a function or an object to be used in other files
export const filterByKeyword = (keyword, array) => {
  return array.filter((item) =>
    item.body.toLowerCase().includes(keyword.toLowerCase())
  );
};

//There's only one default export in a file
export default add = (a, b) => {
    return a + b;
}

export const copy = (array) =>  {
    return [...array];
}
