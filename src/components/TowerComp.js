import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const TowerComp = ({ id, disks, handleDrop, handleDrag }) => {
  return (
    <div
      className="column-container"
      id={id}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <Droppable droppableId={`tower-${id}`}>
        {(droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="center-bar task-container"
          >

            {disks.map((tile, index) => {
              const tileCount = disks.length;
              const tileStyles = {width: `${tile.width}em`,};

              tileStyles.marginTop = index === 0 ? `calc(80vh - ${tileCount * 40 + 20}px)` : "0";
              
              return (
              <Draggable key={tile.id} draggableId={tile.id} index={index}>
                {(draggableProvided) => (
                  <div
                    {...tile}
                    // draggable
                    key={`column-${id}-${tile.id}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDragStart={(e) => handleDrag(e, tile, id)}
                    style={tileStyles}
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    className="tile tile-item"
                  />
                )}
              </Draggable>
              )
            })}

            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
};

export default TowerComp;

