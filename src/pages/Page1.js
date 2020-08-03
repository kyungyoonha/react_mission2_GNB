import React from "react";
import "./Page.css";
import defaultData from "../defaultData";

function Page1({ match }) {
    const pageId = match.params.pageId;
    let contentList;
    if (!pageId) {
        contentList = defaultData.filter((data) => data.page === "page1");
    } else {
        contentList = defaultData.filter((data) => data.productId === pageId);
    }

    return (
        <div className="page">
            <div className="page__container">
                <div className="page__main">
                    <h1 className="page__mainTitle">Page1</h1>
                    <div className="page__mainContent">
                        본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용
                    </div>
                </div>
                {contentList.map((data) => (
                    <div className="page__sub" key={data.productId}>
                        <h2 className="page__subTitle">{data.name}</h2>
                        <div className="page__subCotent">{data.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page1;
