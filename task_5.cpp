#include <iostream>
using namespace std;
int main(){
    char ch;
    cout<<"enter a character or number ";
    cin>>ch;
    int a = ch;
    if(a>=97&&a<=122)
    cout<<"small letter";
    else{
        if(a>=65&&a<=90)
        cout<<"capital letter";
        else if (a>=48&&a<=57)
        cout<<"numbers";
    }
}