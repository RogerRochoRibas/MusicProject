import classNames from "classnames";
export const SuccessScreen = (props) => {
    if (!props.logged){
    return (
      <div className={classNames("modal", { hide: !props.successScreen })}>
        <h2 className="title">Registration Successful</h2>
      </div>
    )};
    if (props.logged){
        return (
          <div className={classNames("modal", { hide: !props.successScreen })}>
            <h2 className="title">Log In Successful</h2>
          </div>
        )};
  };