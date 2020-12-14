function Creators(props) {
  return (
    <div className="modal-creators">
      <div className="creators-contents">
        <div className="creators-close" onClick={CreatorsClose}>
          +
        </div>
        <div className="creators">
          <div className="creators-heading">
            <b>
              <u>CREATORS</u>
            </b>
          </div>
          <br />
          <div className="creator">
            <img src="../assets/siddhi.jpeg" alt="" className="creator-img" />
            <b>SIDDHI SETH</b>
          </div>
          <p>
            Senior Analyst, working with Capgemini India from 2020.
            <br />
            Completed Btech in Electrical Engineering from NIT Bhopal.
          </p>
          <div className="creator">
            <img src="../assets/mathura.jpeg" alt="" className="creator-img" />
            <b>MATHURA DAS</b>
          </div>
          <p>
            Senior Analyst, working with Capgemini India from 2020.
            <br />
            Completed Btech in Electrical Engineering from IIT Dhanbad.
          </p>
        </div>
      </div>
    </div>
  );
}
function Rules(props) {
  return (
    <div className="modal-help">
      <div className="help-contents">
        <div className="help-close" onClick={HelpClose}>
          +
        </div>
        <div className="rules">
          <b>
            RULES FOR TIC-TAC-TOE:
            <ul>
              <li>
                The game is played on a grid that's 3 squares by 3 squares.
              </li>
              <li>
                You are X, your friend (or the computer in this case) is O. ...
              </li>
              <li>
                The first player to get 3 of her marks in a row (up, down,
                across, or diagonally) is the winner.
              </li>
              <li>When all 9 squares are full, the game is over.</li>
            </ul>
          </b>
        </div>
      </div>
    </div>
  );
}
function Popups(props) {
  return (
    <>
      <Creators />
      <Rules />
    </>
  );
}
const domContainer = document.querySelector("#popups");
ReactDOM.render(<Popups />, domContainer);
