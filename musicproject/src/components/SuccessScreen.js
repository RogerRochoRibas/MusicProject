import classNames from "classnames";
export const SuccessScreen = (props) => {
  if (!props.logged) {
    return (
      <div className={classNames("modal registration", { show: props.successScreen })}>
        <div className="modal-content">
          <h2 className="title">Registration Successful</h2>
        </div>
      </div>
    );
  }
  if (props.logged) {
    return (
      <div className={classNames("modal login", { show: props.successScreen })}>
        <div className="modal-content">
          <h2 className="title">Log In Successful</h2>
        </div>
      </div>
    );
  }
};
