//In javascript by using keyword export
//we can export a function or an object

//By using import/export we can organize our code in a way that
//It is logically separated from other code



//there is only one default export in a file
export const filterByKeyword = (keyword, array) => {
    return array.filter((item) =>
    item.body.toLowerCase().includes(keyword.toLowerCase())
    );
};

export const copy = (array) => {
    return [...]
}

const word = ["Hello","World","in","a","frame"];
const result = filterByKeyword("a", words);