import React, { useRef } from 'react'

const Documentation = () => {

    const whatIsRef = useRef()
    const docsRef = useRef()
    const datasetsRef = useRef()
    const locationRef = useRef()
    const typeRef = useRef()
    const statusRef = useRef()
    const materialRef = useRef()
    const holderRef = useRef()
    const dateRef = useRef()
    const idsRef = useRef()
    const nameRef = useRef()
    const additionUpdateRef = useRef()
    const changeUpdateRef = useRef()
    
    function handleClick(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='instruction-group'>
            <h1 ref={docsRef}>Documentation</h1>
            <ul className='index'>
                <li onClick={() => handleClick(whatIsRef)}>About Gplore</li>
                <li onClick={() => handleClick(datasetsRef)}>Datasets</li>
                <li onClick={() => handleClick(locationRef)}>Location</li>
                <li onClick={() => handleClick(typeRef)}>Type</li>
                <li onClick={() => handleClick(statusRef)}>Status</li>
                <li onClick={() => handleClick(materialRef)}>Type</li>
                <li onClick={() => handleClick(holderRef)}>Holder</li>
                <li onClick={() => handleClick(dateRef)}>Date</li>
                <li onClick={() => handleClick(idsRef)}>IDs</li>
                <li onClick={() => handleClick(nameRef)}>Name</li>
                <li onClick={() => handleClick(additionUpdateRef)}>Addition Update</li>
                <li onClick={() => handleClick(changeUpdateRef)}>Change Update</li>
            </ul>
            <hr/>
            <br/>
            <h2 ref={whatIsRef}>About Gplore</h2>
            <p>What is Gplore… the name is a play on “geological exploration” and it is an application designed to organise the vast amount of data of the resource industry. Australia is arguably the most resource rich and resource diverse country on the planet. It is generally managed independently by the state governments, usually by multiple departments within them, for instance, a department for petroleum and a department for minerals. This makes exploring the Australian resource industry as a whole a very tedious task. This is what Gplore strives to solve, an intuitive application that does the hard work for you.</p>
            <p>The application is composed of two datasets, titles and sites, which are themselves related. For a description on the two datasets, go to the ‘Datasets’ section below. In the application, the user is able to select one of these datasets and filter for the data they desire. This could be by location, type, status or any of the other filter groups specified further down the page. On top of this, the user is able to filter the other dataset for related data. For example, a user could filter for all the mining titles in a specific region and then filter for all the active mines that lie within these titles. The resulting data can be viewed in map or table form, while more detailed data of an individual title or site is also easily accessible. Along with viewing data, Gplore also allows users to edit and even create data. Specific fields are editable in both the titles and sites datasets if the need arises, while the user also has the ability to move a site in the map interface or create a new site when they see fit.</p>
            <p>The potential of Gplore is endless with future developments aimed at improving the quality of the data, expanding and adding new fields to the current datasets, adding new datasets, such as significant drill hole intercepts, and improving the overall performance of the application.</p>
            <hr/>
            <br/>
            <h2 ref={datasetsRef}>Datasets</h2>
            <p>The application is composed of two datasets, titles and sites, which are, themselves, spatially related. Currently, the titles dataset is composed of around 45,000 items and the sites dataset has approximately 150,000. Investigating this data is made effortless with the gplore filter, known as data control. This filter allows the user to choose which primary dataset they want to search, and once selected, the filter options are provided. As mentioned, these datasets are spatially related and this allows the user to filter both datasets simultaneously simply by activating the ‘Combine Related Data’ and using the related data filter by clicking on the ‘Relations’ Button.</p>
            <h3>Title</h3>
            <p className='instruction-p2'>A title, also known as a tenement, is a parcel of land which can be leased by companies or individuals for predefined, yet usually extendable periods of time. A title generally falls into one of five groups; exploration, mining, production, retention and miscellaneous. This grouping determines the type work that can be performed in the parcel of land. It is possible for title holders to convert the title type to allow the progression of work, which is generally determined on the economic value of the proven resource, the land type and its importance to other groups such as the traditional owners. The Title dataset includes 9 filter groups; Location, Type, Status, Material, Holder, Date, IDs, Addition Update and Change Update.</p>
            <h3>Site</h3>
            <p className='instruction-p2'>A Site is any point of interest. This could be an active mine, prospecting site, historic working, anomaly, oil well and much more. The Site dataset includes 8 filter groups; Location, Type, Status, Material, Name, IDs, Addition Update and Change Update. Coming soon, there will be a feature which allows users to add and edit sites in the map interface.</p>
            <hr/>
            <br/>
            <h2 ref={locationRef}>Location</h2>
            <p>The ‘Location’ group allows the user to filter either the title or site datasets by a geospatial region. When filtering by location it is important to understand the difference between onshore and offshore areas. This generally applies for oil and gas wells, still it is important to understand nonetheless. Onshore is everything on land and the coastal waters up to 3 nautical miles (5556m) off the coast. Onshore areas are managed by the state governments, while beyond this are the Australian Commonwealth waters, known as offshore, which is managed by the Australian federal government. There are seven sub-groups of Location to assist with your search; State, Region, Local, Province, Draw and Buffer.</p>
            <h3>State</h3>
            <p className='instruction-p2'>The ‘State’ sub-group allows the user to filter either the title or site datasets by the Australian State or Territory they are located. The Australian Capital Territory is included, however, there is currently no data within in its boundaries and therefore will not appear as an option. There are also two external Australian Territories which host titles and sites, yet do not appear as options in this sub-group. These are Christmas Island and the Ashmore and Cartier Islands. Due to the small number of sites and titles present in these territories, they have been grouped with Western Australia. However, they can be filtered separately in both the region and local sub-group. Similarly, the offshore data is also combined with its nearest state in this sub-group. Likewise, it can also be filtered independently through the Region and Local sub groups.</p>
            <h3>Region</h3>
            <p className='instruction-p2'>The ‘Region’ sub-group allows the user to filter the datasets by the government regions of Australia. There are 78 government regions in total which are constrained by the state and territory boundaries and generally composed of multiple local government areas. Areas included which are not government regions include the external territories described above, along with large water inlets, such as the Spencer and St Vincent Gulfs in South Australia and the offshore area.</p>
            <h3>Local</h3>
            <p className='instruction-p2'>The ‘Local’ sub-group allows the user to filter the datasets by the local government areas of Australia. There are 572 local government areas in total which are mostly constrained by the government region boundaries. The additional areas which are not local government areas are the same as those in the Region sub-group.</p>
            <h3>Province</h3>
            <p className='instruction-p2'>The ‘Province’ sub-group allows the user to filter the datasets by geological province. There are 502 geological provinces which are made up of 6 different types; province, sub-province, super-province, crustal, element and domain. While useful, this sub-group requires work to improve the quality of the assigned provinces. Currently, the provinces are assigned based on their two dimensional spatial relationship with the site or title and does not take into account any other factors such as depth. Therefore, one site or title could be assigned multiple provinces which lie at differing depths when only one is the host of the targeted material.</p>
            <h3>Draw</h3>
            <p className='instruction-p2'>The ‘Draw’ sub-group allows the user to filter the datasets by a manually selected area on the map. When applying this feature, be careful not to select an area outside of an already filtered area as this will return zero results.</p>
            <h3>Buffer</h3>
            <p className='instruction-p2'>The ‘Buffer’ sub-group allows the user to filter an area by kilometre radius from a site or the centre of a title by entering the gplore id of the feature. It is important not to apply this filter with another location sub-group, as this will likely result in two non-intersecting areas which will yield no results.</p>
            <hr/>
            <br/>
            <h2 ref={typeRef}>Type</h2>
            <p>The ‘Type’ group, which is included in both the title and site filter, have the same sub-group set out; simplified and detailed, which allow the user to filter by a simpler set of type options in the ‘simplified’ group or with the full list of type options in the ‘detailed’ sub-group. It is also possible to filter by the simplified option first to reduce the number of options available in the detailed list. While both datasets can be filtered by type, the options available differ.</p>
            <h3>Title</h3>
            <p className='instruction-p2'>Titles can generally be divided into five groups; exploration, mining, production, retention and Miscellaneous. However, titles follow rules and regulations set by the jurisdiction they fall within and as a result, there are a number of differences between them. These differences may be the type of work which can be performed, the duration of the lease and the expected expenditure. This is partially the reason for the two sub-groups. The ‘simplified’ sub-group groups all the different types of titles into their broad groups, while the ‘Detailed’ sub-group provides the option to filter by its actual type. These detailed options have the state prefix before them, as such ‘WA – ‘, this is to distinguish two different title types from two states with the same type name.</p>
            <h3>Site</h3>
            <p className='instruction-p2'>A site can be any point of resource interest, therefore, its type is very broad. The ‘Detailed’ sub-group options include options such as; open cut mine, underground mine, anomaly, old workings, outcrops, oil well, and many more. The ‘Simplified’ sub-group works to simplify this list by grouping them together, such as ‘Mines and Quarries’ which will filter for all the different types of mine and quarries. Momentarily, the type of the sites in the dataset has a large number of irregularities which will continue to be a focus of improvement. These are derived from the original state datasets, difficulty in compiling the data or simply a lack of data.</p>
            <hr/>
            <br/>
            <h2 ref={statusRef}>Status</h2>
            <p>The ‘Status’ group, which is included in both the title and site filter, have the same sub group set out; simplified and detailed, which allow the user to filter by a simpler set of status options in the ‘simplified’ group or with the full list of options in the ‘detailed’ sub-group. While both datasets can be filtered by status, the options available are different.</p>
            <h3>Title</h3>
            <p className='instruction-p2'>The status of a title refers to whether it is active, in the renewal process, expired, in the application process, part of a release (petroleum) etc. The ‘Detailed’ sub-group provides all the options which can be different states.</p>
            <h3>Site</h3>
            <p className='instruction-p2'>The Status of a site refers to whether it is operating, abandoned, never worked, suspended etc. There are many status options which can all be search for within the ‘Detailed’ sub-group. As mentioned in the ‘Type’ group above, the sites Status is also a work in progress.</p>
            <hr/>
            <br/>
            <h2 ref={materialRef}>Material</h2>
            <p>The ‘Material’ group allows the user to filter either the title or site datasets for one or more different economic materials that exist. The site data is composed by the major material targeted at the site, so for a gold mine, the material would be gold. However, the Materials of each title are compiled differently. The major materials of a title are the combined major materials from all the sites within its boundaries. This group contains two sub-groups with the same options in both of the title and site filters; Category and Name. </p>
            <h3>Category</h3>
            <p className='instruction-p2'>The ‘Category’ sub-group allows the user to filter by the category of a material. An example is ‘Coal’ which would filter for all types of coal titles or sites which would include brown coal, black coal etc. Another would be ‘Metals’ which would filter for all metal ores such as iron ore, gold, copper, nickel etc.</p>
            <h3>Name</h3>
            <p className='instruction-p2'>The ‘Name’ sub-group allows the user to filter by the name of the major material group that is associated with the site or title. This could be a metal element such as gold or nickel, or construction materials such as granite and more.</p>
            <hr/>
            <br/>
            <h2 ref={holderRef}>Holder</h2>
            <p>The ‘Holder’ group allows the user to filter by the company or individual leasing the title. While title holders can potentially make agreements with other companies to work on a specific site in the title, there is currently no way to filter for this. The Holder group is only available when filtering the title dataset. There are three sub-groups in the Holder group; Parent, Type and Name.</p>
            <h3>Parent</h3>
            <p className='instruction-p2'>The ‘Parent’ sub-group allows the user to filter by the company which has ownership of the company holding the titles lease. In the resource industry, it is common practice for a Parent company to hold, if not all, then most of their titles through subsidiaries. This means, the titles indirectly held by companies such as BHP or Rio Tinto are spread across 10 to 20 subsidiaries. As a result, searching for all the titles held by a medium to large sized resource company would become a tedious task. The ‘Parent’ sub-group solves this by allowing the user to filter directly by the parent company, which will then display all the titles held by their subsidiaries.</p>
            <h3>Name</h3>
            <p className='instruction-p2'>The ‘Name’ sub-group allows the user to filter by the name of the individual or company that holds the title lease. </p>
            <h3>Type</h3>
            <p className='instruction-p2'>The ‘Type’ sub-group allows the user to filter by the type of the title holder. This could be an individual, a government body or a type of Australian Company, but it could also be a foreign owned company. While the majority of titles are held by Australian individuals or companies, there are others which are held by foreign companies, such as American, British, Chinese, Japanese etc. Foreign companies can be structured differently and therefore are recorded as a different type.</p>
            <hr/>
            <br/>
            <h2 ref={dateRef}>Date</h2>
            <p>The ‘Date’ group allows the user to filter the title dataset by lodge date, start date and end date. The lodge date is the date the applicant lodged the application in a bid to become the holder of the title, while the start date is the date the applicant became active holder of the title and the end date is the expiry date of the title, which under certain conditions, the holder is able to extend. Not all titles can be filtered by the three date types. Certain types of titles do not expire and therefore have no end date, while those in the application process will have no start date or end date until they are approved.</p>
            <hr/>
            <br/>
            <h2 ref={idsRef}>IDs</h2>
            <p>The ‘IDs’ group allows the user to filter either the title or site dataset by its id. There are two sub-groups for ids; Original IDs and Gplore IDs.</p>
            <h3>Original IDs</h3>
            <p className='instruction-p2'>The ‘Original IDs’ sub-group allows the user to filter by ids assigned by external sources such as the state department which governs the industry and manages the data. This is useful when attempting to locate a title or site with an id found from another source, however, be aware that there are duplicate ids, especially across different states, so it may be wise to first filter by a location.</p>
            <h3>Gplore IDs</h3>
            <p className='instruction-p2'>The ‘Gplore IDs’ sub-group allows the user to filter by a unique seven digit identifier given to each title and site within gplore. It is not associated with any outside sources.</p>
            <hr/>
            <br/>
            <h2 ref={nameRef}>Name</h2>
            <p>The ‘Name’ group allows the user to filter the site dataset by the name of the site. In some cases a site has multiple names and it is not uncommon for the same name to exist across multiple different sites. There are also many sites that have no name.</p>
            <hr/>
            <br/>
            <h2 ref={additionUpdateRef}>Addition Update</h2>
            <p>The ‘Addition Update’ group allows the user to filter either the title or site datasets by the date the latest titles or sites were added.</p>
            <hr/>
            <br/>
            <h2 ref={changeUpdateRef}>Change Update</h2>
            <p>The ‘Change Update’ group allows the user to filter either the title or site datasets by the date the changes have occurred and the field the changes have occurred in. For example, it is possible to filter for titles that have had a change of holder in the past week, or any other time period the user requests.</p>
            <hr/>
            <br/>
            <div className='div-link' onClick={() => handleClick(docsRef)}>Back to the top</div>
        </div>
    )
}

export default Documentation
