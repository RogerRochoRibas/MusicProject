import classNames from "classnames";
export const SuccessScreen = (props) => {
    return (
      <div className={classNames("modal registration", { show: props.successScreen })}>
        <div className="modal-content">
          <h2 className="title">{props.successText}</h2>
        </div>
      </div>
    );
  
};
