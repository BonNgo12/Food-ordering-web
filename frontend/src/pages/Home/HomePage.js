import React, {useEffect, useReducer, useState} from 'react';
import { getAll, getAllByTag, getAllTags } from '../../services/foodService';
import { search } from '../../services/foodService';
import Tags from '../../Components/Tags/Tags';
import Thumbnails from '../../Components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import NotFound from '../../Components/NotFound/NotFound';


const initialSate = { foods: [], tags: []};

const reducer = (state, action) => {
    switch (action.type){
        case 'FOODS_LOADED':
            return{...state, foods: action.payload };
        case 'TAGS_LOADED':
            return{...state, tags: action.payload };
        default:
            return state;
    };
}

export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialSate);
    const { foods, tags } = state;
    const { searchTerm, tag } = useParams();

    useEffect(()=>{
            getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

            const loadFoods =
            tag? getAllByTag(tag)
            : searchTerm? 
            search(searchTerm) 
            : getAll();
    
            loadFoods.then(foods => dispatch({type: 'FOODS_LOADED', payload: foods}))
        
        
    }, [searchTerm, tag]);


    return <>
        <Tags tags={tags}/>
        {foods.length ===0 && <NotFound linkText="Reset Search"/>}
        <Thumbnails foods={foods}/>
    </>;
}


// import React, { useEffect, useReducer, useState } from 'react';
// import { getAll, getAllByTag, getAllTags } from '../../services/foodService';
// import { search } from '../../services/foodService';
// import Tags from '../../Components/Tags/Tags';
// import Thumbnails from '../../Components/Thumbnails/Thumbnails';
// import { useParams } from 'react-router-dom';
// import NotFound from '../../Components/NotFound/NotFound';

// const initialState = { foods: [], tags: [] };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'FOODS_LOADED':
//             return { ...state, foods: action.payload };
//         case 'TAGS_LOADED':
//             return { ...state, tags: action.payload };
//         default:
//             return state;
//     };
// }

// export default function HomePage() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const { foods, tags } = state;
//     const { searchTerm, tag } = useParams();
//     const [reload, setReload] = useState(false); // State to trigger reload

//     useEffect(() => {
//         // Fetch tags
//         getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

//         // Fetch foods based on search term or tag
//         const loadFoods = tag ? getAllByTag(tag) : searchTerm ? search(searchTerm) : getAll();
//         loadFoods.then(newFoods => {
//             // Check if foods have changed
//             if (JSON.stringify(newFoods) !== JSON.stringify(foods)) {
//                 // Update foods state
//                 dispatch({ type: 'FOODS_LOADED', payload: newFoods });
//                 // Trigger reload by updating reload state
//                 setReload(prevReload => !prevReload);
//             }
//         });
//     }, [searchTerm, tag, reload]); // Include reload in the dependency array

//     return (
//         <>
//             <Tags tags={tags} />
//             {foods.length === 0 && <NotFound linkText="Reset Search" />}
//             <Thumbnails foods={foods} />
//         </>
//     );
// }


// import React, { useEffect, useReducer, useState } from 'react';
// import { getAll, getAllByTag, getAllTags } from '../../services/foodService';
// import { search } from '../../services/foodService';
// import Tags from '../../Components/Tags/Tags';
// import Thumbnails from '../../Components/Thumbnails/Thumbnails';
// import { useParams } from 'react-router-dom';
// import NotFound from '../../Components/NotFound/NotFound';
// import classes from './HomePage.module.css';

// const initialState = { foods: [], tags: [] };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'FOODS_LOADED':
//             return { ...state, foods: action.payload };
//         case 'TAGS_LOADED':
//             return { ...state, tags: action.payload };
//         default:
//             return state;
//     };
// }

// export default function HomePage() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const { foods, tags } = state;
//     const { searchTerm, tag } = useParams();
//     const [reload, setReload] = useState(false);

//     useEffect(() => {
//         // Fetch tags
//         getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

//         // Fetch foods based on search term or tag
//         const loadFoods = tag ? getAllByTag(tag) : searchTerm ? search(searchTerm) : getAll();
//         loadFoods.then(newFoods => {
//             // Update foods state
//             dispatch({ type: 'FOODS_LOADED', payload: newFoods });
//             // Reload the webpage
//             window.location.reload();
//             // setReload(prevReload => !prevReload);
//         });
//     }, [searchTerm, tag]);

//     return (
//         <>
//             <Tags tags={tags} />
//             {foods.length === 0 && <NotFound linkText="Reset Search" />}
//             <Thumbnails foods={foods} />
//         </>
//     );
// }

// const initialState = { foods: [], tags: [] };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FOODS_LOADED':
//       return { ...state, foods: action.payload };
//     case 'TAGS_LOADED':
//       return { ...state, tags: action.payload };
//     default:
//       return state;
//   }
// };

// export default function HomePage() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { foods, tags } = state;
//   const { searchTerm, tag } = useParams();
//   const [isRendered, setIsRendered] = useState(false);

//   useEffect(() => {
//     setIsRendered(false);

//     getAllTags().then((tags) => dispatch({ type: 'TAGS_LOADED', payload: tags }));

//     const loadFoods = tag
//       ? getAllByTag(tag)
//       : searchTerm
//       ? search(searchTerm)
//       : getAll();

//     loadFoods.then(foods => {
//       dispatch({ type: 'FOODS_LOADED', payload: foods });
//       setIsRendered(true);
//     });
//   }, [searchTerm, tag, isRendered]);

//   return (
//     <>
//       <Tags tags={tags} />
//       <div className={isRendered ? 'classes.content' : 'classes.content_hidden'}>
//         {foods.length === 0 && <NotFound linkText="Reset Search" />}
//         <Thumbnails foods={foods} />
//       </div>
//     </>
//   );
// }