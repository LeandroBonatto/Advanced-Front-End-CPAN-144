export const filterByKeyword = (keyword, array) => {
    return array.filter((item) =>
      item.body.toLowerCase().includes(keyword.toLowerCase())
    );
  };
  
  export default add = (result) => {
      return result;
  }
  
  export const copy = (array) =>  {
      return [...array];
  }