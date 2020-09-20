import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import NotesList from './components/notes/List'
import NotesShow from './components/notes/Show'
import NotesAdd from './components/notes/Add'
import NotesEdit from './components/notes/Edit'

import CategoriesList from './components/categories/List'
import CategoriesShow from './components/categories/Show'
import CategoriesAdd from './components/categories/Add' 
import CategoriesEdit from './components/categories/Edit'

function App() {
    return (
        <div>
            <BrowserRouter>

                <h2>Notes App</h2>
                <Link to='/notes'>Notes</Link>
                <Link to='/categories'>Catagories</Link>

                <Switch>
                <Route path='/notes' component={NotesList} exact={true}/>
                <Route path='/notes/add' component={NotesAdd} />
                <Route path='/notes/edit/:id' component={NotesEdit} />
                <Route path='/notes/:id' component={NotesShow} />

                <Route path='/categories' component={CategoriesList} exact={true}/>
                <Route path='/categories/add' component={CategoriesAdd} />
                <Route path='/categories/edit/:id' component={CategoriesEdit} />
                <Route path='/categories/:id' component={CategoriesShow} />
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App 