import create from 'zustand'
import{devtools} from 'zustand/middleware'

let store = (set => ({
    populars:[],
    allMovies: [],
    topRatedMovies: [],
    pagenumber:1,
    currenttext:'',
    favouritelist:[],
    loading:false,
    genres:[],
    currentgenre:'All Genres',
    newmovies:[],
    genresid:[],
    trailerKey:'',
    modalIsOpen:false,
    setPopulars: (values) => set(() => ({ populars: values })),
    setAllMovies: (values) => set(() => ({ allMovies: values })),
    setTopRatedMovies: (values) => set(() => ({ topRatedMovies: values })),
    setPagenumber: () => set(state => ({ pagenumber: state.pagenumber + 1 })),
    setLoading: () => set(() => ({ loading: true })),
    setCurrenttext: (value) => set(() => ({ currenttext: value })),
    setFavouritelist: (values) => set(() => ({ favouritelist: [...values] })),
    setgenres:(value) => set(() => ({ genres: [...value] })),
    setcurrentgenre:(value) => set(() => ({ currentgenre: value })),
    setnewmovies:(value) => set(() => ({ newmovies: [...value] })),
    setgenresid: (value) => set(() => ({ genresid: [...value] })),
    setTrailerKey:(value) => set(() => ({ trailerKey: value })),
    openModal: () => set(() => ({ modalIsOpen: true})),
    closeModal: () => set(() => ({ modalIsOpen: false}))
}))

let useStore;
useStore = create(devtools(store));
export default useStore;

