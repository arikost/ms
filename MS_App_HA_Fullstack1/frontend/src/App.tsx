import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import { ElementProps } from './store/reducers/photoReducer';
import { getData, getPagination, setCategory } from './store/action/actionCreator';
import { Modal } from 'react-overlays';
import { Categories } from './store/action/actionInterface';


function App() {
  const dispatch = useDispatch();
  const newData = useSelector(
    ({photoReducer}: RootState) => photoReducer.data
  );

  const [data, setData] = useState<ElementProps[]>();
  const [modalElementValues, setModalElementValues] = useState<ElementProps>();
  const [modalElementState, seModalElementState] = useState(false);
  const [modalCategoriesState, setModalCategoriesState] = useState(false);

  useEffect(() => {
    dispatch(getData())
  },[])
  useEffect(()=> {
    setData(newData);
  },[newData])
  const choseNewCategory = useCallback((category:Categories) => {
    dispatch(setCategory(category));
    dispatch(getData());
    setModalCategoriesState(false)
  },[])

  const CategoryModal = useCallback(() => {
    return(
      <Modal
        show={modalCategoriesState}
      >
        <div className='modal-background'>
            <button className='close-btn' onClick={() => setModalCategoriesState(false)}> X</button>
            <div className='modal'>
              
              <button className='btn-category' onClick={() => choseNewCategory('sport')}>sport</button>
              <button className='btn-category'onClick={() => choseNewCategory('animal')}>animal</button>
              <button className='btn-category' onClick={() => choseNewCategory('work')}>work</button>
            </div>
        </div>
      </Modal>
    )
  },[modalCategoriesState])
  const modalElement = useCallback((item: ElementProps) => {
    setModalElementValues(item);
    seModalElementState(true)
  },[])
  const ElementModal = useCallback(() =>{
    return(
      <Modal
        show={modalElementState}      
      >
        <div className='modal-background'>
            <button className='close-btn' onClick={() => seModalElementState(false)}> X</button>
            <div className='modal'>
              <img width={200} height={200} src={modalElementValues?.largeImageURL}/>
              <div>
              <p>views : {modalElementValues?.views}</p> 
              <p>downloads : {modalElementValues?.downloads}</p> 
              <p>likes : {modalElementValues?.likes}</p> 
              <p>collections : {modalElementValues?.collections}</p> 
              <p>tags : {modalElementValues?.tags}</p> 
              <p>user : {modalElementValues?.user}</p> 
              </div>
            </div>
        </div>
        
      </Modal>

    )
  },[modalElementState])

;  return (
    <React.Fragment>
      <div className='header'> 
        <button className='btn' onClick={() => dispatch(getPagination('forward'))}>next </button>
        <button className='btn' onClick={() => setModalCategoriesState(true)}>category </button>
        <button className='btn' onClick={() => dispatch(getPagination('backward'))}>prev </button>
      </div>
      <div className='row'>
      {data?.map((item, index) => 0 <= index  && index < 3 ?(
        <button onClick={() => modalElement(item)}>
          <img src={item.previewURL} width={150} height={150}/>
        </button>
      ):(undefined))}
      </div>
      <div className='row'>
      {data?.map((item, index) => 2 < index  && index < 6 ?(
        <button onClick={() => modalElement(item)}>
          <img src={item.previewURL} width={150} height={150}/>
        </button>
      ):(undefined))}
      </div>
      <div className='row'>
      {data?.map((item, index) => 5 < index  && index < 9 ?(
        <button onClick={() => modalElement(item)}>
          <img src={item.previewURL} width={150} height={150}/>
        </button>
      ):(undefined))}
      </div>
      <ElementModal/>
      <CategoryModal/>
    </React.Fragment>
  );
}

export default App;
