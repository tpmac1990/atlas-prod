import React, { Fragment } from 'react'
import LocationGroup from './groups/LocationGroup'
import TypeGroup from './groups/TypeGroup'
import StatusGroup from './groups/StatusGroup'
import IDGroup from './groups/IDGroup'
import MaterialGroup from './groups/MaterialGroup'
import NameGroup from './groups/NameGroup'
import UpdateGroup from './groups/UpdateGroup'
import ChangeUpdateGroup from './groups/ChangeUpdateGroup'


function OccurrenceFilter () {
    return (
        <Fragment>
            <LocationGroup />
            <TypeGroup groupList={['typesimple','typedetail']} name={'type'} />
            <StatusGroup groupList={['statussimple','statusdetail']} name={'status'} />
            <MaterialGroup groupList={['materialcategory','materialname']} name={'material'} />
            <NameGroup />
            <IDGroup />
            <UpdateGroup name='addition' title='Site Additions Dates' />
            <ChangeUpdateGroup />
        </Fragment>
    )
}

export default OccurrenceFilter