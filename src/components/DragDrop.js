import React, {useState, useRef} from 'react';
import { Box } from '@mui/material';

const DragDrop = ({experienceList}) => {
  const [list, setList] = useState(experienceList);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {

    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragEnd', handleDragEnd);

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };


  /////////params ======== targetItem
  const handleDragEnter = (e, params) => {

    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {

      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI].items.splice(
            currentItem.itemI,
            1
          )[0]
        );
        dragItem.current = params;
        localStorage.setItem('List', JSON.stringify(newList));
        return newList;
      });
    }
  };


  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragNode.current.removeEventListener('dragEnd', handleDragEnd);
    dragNode.current = null;
  };
  const getStyles = (item) => {
    if (
      dragItem.current.grpI === item.grpI &&
      dragItem.current.itemI === item.itemI
    ) {
      return 'dnd-item current';
    }
    return 'dnd-item';
  };

  return (
    <Box bg='orange.100'>
      {list.map((grp, grpI) => (
        <Box
        bg='orange.300'
          key={grp.title}
          onDragEnter={
            dragging && !grp.items.length
              ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
              : null
          }
          
        >
          {grp.items.map((item, itemI) => (
            <Box
              draggable
              key={item}
              onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
              onDragEnter={
                dragging
                  ? (e) => {
                      handleDragEnter(e, { grpI, itemI });
                    }
                  : null
              }
              bg={dragging ? 'gray.200' : 'orange.700'}
              color={dragging ? 'gray.800' : 'orange.50'}
            >
              {item}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default DragDrop;
