package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

// compile all templates and cache them
var templates = template.Must(template.ParseGlob("templates/*"))

var err                        error
var JSON                       string

func checkHandler(w http.ResponseWriter, r *http.Request) {
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	data := struct {
		Title  string
	}{
		"Shabad OS",
	}
	err = templates.ExecuteTemplate(w, "indexPage", &data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func eh(err error, code string) {
    if err != nil {
        fmt.Println("--------------------------------------------------------------------------------\nError Code: "+code)
        fmt.Println(err)
        fmt.Println("--------------------------------------------------------------------------------")
    }
}

func main() {
	//start program
	fmt.Println("--- Started! ---")

	//basic handlers for files
	http.Handle("/styles/", http.StripPrefix("/styles/", http.FileServer(http.Dir("styles"))))
	http.Handle("/includes/", http.StripPrefix("/includes/", http.FileServer(http.Dir("includes"))))
	http.Handle("/update/win/", http.StripPrefix("/update/win/", http.FileServer(http.Dir("updates/win"))))
	http.Handle("/updates/win/", http.StripPrefix("/updates/win/", http.FileServer(http.Dir("updates/win"))))

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/check/", checkHandler)

	//log.Fatal(http.ListenAndServe(":8080", nil))
	log.Fatal(http.ListenAndServe(":8000", nil))
}
