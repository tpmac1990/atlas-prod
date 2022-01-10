import viewportsJSON from '../fixtures/02-test-iterations/viewports.json'
import filterCheckboxGroups from '../fixtures/02-test-iterations/filter-checkbox-groups.json'


// create the list of viewports
cy.iterationLst = () => {
    return viewportsJSON.viewports
}


// create the list of viewports for both logged in and logged out
cy.iterationLoginLst = () => {
    let iterations = []
    viewportsJSON.viewports.forEach(obj => {
        iterations.push({ ...obj, login: true },{ ...obj, login: false })
    })
    return iterations
}


// create the list of viewports for both datasets
cy.iterationDatasetLst = () => {
    let iterations = []
    viewportsJSON.viewports.forEach(obj => {
        iterations.push({ ...obj, dataset: 'Tenement' },{ ...obj, dataset: 'Occurrence' })
    })
    return iterations
}

// create the list of filter checkbox groups
cy.iterationCheckboxLst = () => {
    let filterIterations = []
    const datasets_lst = ['Tenement','Occurrence']
    const filter_lst = ['primary','related']
    datasets_lst.forEach((l_dataset) => {
        filter_lst.forEach((l_filter) => {
            filterCheckboxGroups.groups.forEach((iter) => {

                const { datasets, filter, group, subgrp } = iter
                if ( !datasets.includes(l_dataset) || l_filter != filter ) return;

                subgrp.forEach(grp => {
                    filterIterations.push({dataset: l_dataset, filter: l_filter, group: group, subgrp: grp})
                })
            })
        })
    })
    return filterIterations
}




// cy.myproject = {
//     makeUniqueUsername: () => {
//         return 'cypress-test-' + Cypress.moment().format("YYMMDD-HHmmss");
//     }
// }