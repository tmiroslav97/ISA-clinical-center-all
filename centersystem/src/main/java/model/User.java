package model;

public class User {
    private String name;
    private String surname;
    private String password;
    private String email;
    private int id;

    public User() {
        // TODO: implement
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        name = newName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String newSurname) {
        surname = newSurname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String newPassword) {
        password = newPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String newEmail) {
        email = newEmail;
    }

    public int getId() {
        return id;
    }

    public void setId(int newId) {
        id = newId;
    }

}