def age_to_education_level(age: str):
    if age < 5:
        return "Preschool"
    elif age < 12:
        return "Elementary"
    elif age < 18:
        return "High School"
    else:
        return "College"