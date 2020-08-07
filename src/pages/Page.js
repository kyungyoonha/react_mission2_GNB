import React from "react";
import { defaultData } from "../constants";

function Page({ history }) {
    const page = history.location.pathname.split("/")[1] || "page1"; // 'page1'
    const pageId = history.location.pathname.split("/")[2]; // 'product1

    let contentList;
    if (!pageId) {
        // Get all Sub Contents
        contentList = defaultData.filter((data) => data.page === page);
    } else {
        // Get Sub Content with Page Id
        contentList = defaultData.filter((data) => data.productId === pageId);
    }

    return (
        <div className="page">
            <div className="page__container">
                {/* Main Content */}
                <div className="page__main">
                    <h1 className="page__mainTitle">{page}</h1>
                    <div className="page__mainContent">
                        본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용
                        본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용
                        본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용
                    </div>
                </div>

                {/* Sub Content */}
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

export default Page;
