import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
	display: block;
	margin: 0 auto;
`;

function Loader() {
	return (
		<div className="sweet-loading">
			<PuffLoader color="#11998E" css={override} size={50} />
		</div>
	);
}

export default Loader;
