/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H3,H5 } from "../Typography";
import { Button } from "..";

const JobItem = ({jobType,jobStatus,jobSkills,contractType,contractStatus,jobImage}) => {

  const jobItem = css`
    width:100%;
    height:100%;
    align-self: center;
    border-radius:5px;
    display:flex;
    alig-items:center;
    justify-content: space-evenly;
    flex-direction:row;
    margin-bottom:1rem;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.39);
  `;

  const jobImg = css`
    width:20%;
    height:90%;
    align-self: center;
    border-radius:5px;
  `;
  const jobInfo = css`
    width:20%;
    height:100%;
    display:flex;
    alig-items:center;
    justify-content: space-evenly;
    flex-direction:column;
  `;
  const btnDiv = css`
    width:10%;
    height:100%;
    display:flex;
    alig-items:center;
    justify-content: space-evenly;
    flex-direction:column;
  `;

  return (
    <div css={jobItem}>
      <img src={jobImage} alt={jobType} css={jobImg}></img>
      <div css={jobInfo}>
        <H3>{`${jobStatus} , ${jobType}`}</H3>
        <H5>{jobSkills}</H5>
      </div>
      <div css={jobInfo}>
        <H3>{contractType}</H3>
        <H5>{contractStatus}</H5>
      </div>
      <div css={btnDiv}>
        <Button type="Button">ثبت</Button>
      </div>
    </div>
  )
}

export default JobItem
