function App() {
  return (
    <div>
      <h1>Coming Soooon</h1>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { FixedSizeList, areEqual } from "react-window";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css";

// const initial = Array.from({ length: 1000 }, (v, k) => ({
//   id: `id:${k}`,
//   text: `item ${k}`,
// }));

// function reorder(list, startIndex, endIndex) {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// }

// function getStyle({ provided, style, isDragging }) {
//   const combined = {
//     ...style,
//     ...provided.draggableProps.style,
//   };

//   const marginBottom = 8;
//   const withSpacing = {
//     ...combined,
//     height: isDragging ? combined.height : combined.height - marginBottom,
//     marginBottom,
//   };
//   return withSpacing;
// }

// function Item({ provided, item, style, isDragging }) {
//   return (
//     <div
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//       ref={provided.innerRef}
//       style={getStyle({ provided, style, isDragging })}
//       className={`item ${isDragging ? "is-dragging" : ""}`}
//     >
//       {item.text}
//     </div>
//   );
// }

// // Recommended react-window performance optimisation: memoize the row render function
// // Things are still pretty fast without this, but I am a sucker for making things faster
// const Row = React.memo(function Row(props) {
//   const { data: items, index, style } = props;
//   const item = items[index];
//   return (
//     <Draggable draggableId={item.id} index={index} key={item.id}>
//       {(provided) => <Item provided={provided} item={item} style={style} />}
//     </Draggable>
//   );
// }, areEqual);

// function App() {
//   const [items, setItems] = useState(initial);

//   function onDragEnd(result) {
//     if (!result.destination) {
//       return;
//     }
//     if (result.source.index === result.destination.index) {
//       return;
//     }

//     const newItems = reorder(
//       items,
//       result.source.index,
//       result.destination.index
//     );
//     setItems(newItems);
//   }

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="app">
//         <Droppable
//           droppableId="droppable"
//           mode="virtual"
//           renderClone={(provided, snapshot, rubric) => (
//             <Item
//               provided={provided}
//               isDragging={snapshot.isDragging}
//               item={items[rubric.source.index]}
//             />
//           )}
//         >
//           {(provided) => (
//             <FixedSizeList
//               height={500}
//               itemCount={items.length}
//               itemSize={80}
//               width={300}
//               outerRef={provided.innerRef}
//               itemData={items}
//             >
//               {Row}
//             </FixedSizeList>
//           )}
//         </Droppable>
//         <a href="https://github.com/atlassian/react-beautiful-dnd">
//           react-beautiful-dnd
//         </a>
//       </div>
//     </DragDropContext>
//   );
// }

// export default App;
