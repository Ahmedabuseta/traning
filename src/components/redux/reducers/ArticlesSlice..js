import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchArticles = createAsyncThunk(
//     "ArticleSlice/fetchArticles",
//     async () => {
//       const response = await api('/products/categories'
//       );
//       return response.data;
//     }
//   );

export const ArticleSlice= createSlice({
    name:"ArticleSlice",
    initialState:[
        // {
        //     title:'this is title',
        //     category:'tech',
        //     status:true,
        //     date:'monday June 5th',
        //     time:'12:30 PM',
        //     id:0,
        // },
        // {
        //     title:'this is title',
        //     category:'tech',
        //     status:true,
        //     date:'monday June 5th',
        //     time:'12:30 PM',
        //     id:1,
        // },
        // {
        //     title:'this is title',
        //     category:'Education',
        //     status:false,
        //     date:'sunday June 5th',
        //     time:'12:30 PM',
        //     id:2,
        // },
    ],
    reducers:{
        addArticle:(state,action)=>{
                // state.push({...action.payload,id:state.length})
                const ids = state.map((article=>article.id))
                let index = state.findIndex(action.payload.id)
                ids?.includes(action.payload.id) ? state[index] = ({...action.payload,id:action.payload.id})
                : state.push({...action.payload,id:state.length})
                    
        },
        removeArticle:(state,action)=>{
            return state.filter(article=>article.id!==action.payload.id)
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchArticles.fulfilled, (state, action) => {
    //     state.all = action.payload;
    //     })}
})

export const {addArticle , removeArticle} = ArticleSlice.actions;
export default ArticleSlice.reducer;