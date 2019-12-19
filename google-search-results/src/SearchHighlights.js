import React from "react"
import "./SearchHighlights.css"

import ImageBar from "./ImageBar"
import Profiles from "./Profiles"
import Details from "./Details"
import Overview from "./Overview"
import RelatedSearches from "./RelatedSearches"

export default function SearchHighlights({ title, subTitle, leadImageUrl, imageThumbnailUrls, profiles, otherResults, founders, employees, owner, headquarters, yearFounded, description }){
    return (
        <section className="search-highlights">
            <header>
                <ImageBar
                    leadImageUrl={leadImageUrl}
                    supportingImages={imageThumbnailUrls}
                />
                <Overview
                    title={title}
                    subTitle={subTitle}
                />
            </header>
            <main>
                <Details
                    description={description}
                    founders={founders}
                    employees={employees}
                    owner={owner}
                    headquarters={headquarters}
                    yearFounded={yearFounded}
                />
                <Profiles profiles={profiles} />
                <RelatedSearches links={otherResults} />
            </main>
        </section>
    )
}
