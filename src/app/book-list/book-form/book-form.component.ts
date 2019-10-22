import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private booksService: BooksService,

              private router: Router) { }

 
  ngOnInit() {

    this.initForm();

  }

  initForm() {

    this.bookForm = this.formBuilder.group({

      title: ['', Validators.required],

      author: ['', Validators.required],

      synopsis: ''

    });

  }

  onSaveBook() {

    const title = this.bookForm.get('title').value;

    const author = this.bookForm.get('author').value;

    const synopsis = this.bookForm.get('synopsis').value;

    const newBook = new Book(title, author);

    newBook.synopsis = synopsis;

    this.booksService.createnewBook(newBook);

    this.router.navigate(['/books']);

  }

}
