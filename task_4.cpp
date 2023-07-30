#include <iostream>
using namespace std;
int main(){
    /*to use if- else and if -else if statements*/
    int a; int b;
    cout <<"enter both a and b"<<endl;
    cin>>a>>b;
    /*if (a>b)
    cout<<"the number  "<<a<<"is greater than "<<b;
    else if(a<b)
    cout<<"the number  "<<b<<"is greater than "<<a;
    else
        cout<<"the number  "<<b<<"is equal to "<<a;*/
        if (a>b)
    cout<<"the number  "<<a<<"is greater than "<<b;
    else {
        if (a<b)
    cout<<"the number  "<<b<<"is greater than "<<a;
    else
        cout<<"the number  "<<b<<"is equal to "<<a;}


}
