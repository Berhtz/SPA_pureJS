function getDateFromBirthday(dbay) {}

function getNameForCompare(friend) {}

export function sortByBDay(list) {
    return list.sort((a, b) => {
        if (!a.bdate) {
            return 1
        } else if (!b.bdate) {
            return -1;
        }

        const aDate = getDateFromBirthday(a.bdate);
        const bDate = getDateFromBirthday(b.date);

        return aDate - bDate;
    });
}

export function sortByName(list) {
    return list.sort((a, b) => {
        const aName = getNameForCompare(a);
        const bName = getNameForCompare(b);

        return aName.localeCompare(bName);
    });
}