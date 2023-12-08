export const flexiConfig = {
    items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": "TextField",
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
        "values": ["Maharashtra", "Kerala", "Tamil Nadu"],
      },
      {
        "name": "family",
        "label": "Family",
        "type": "Group",
        "items": [
          {
            "name": "spouse_name",
            "label": "Spouse's Name",
            "type": "TextField",
          },
          {
            "name": "spouse_age",
            "label": "Spouse's Age",
            "type": "TextField",
          },
        ],
      },
    ],
  };