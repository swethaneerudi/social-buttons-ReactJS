const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-bg-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button name="Like" className="like-button" />
        <Button name="Comment" className="comment-button" />
        <Button name="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
