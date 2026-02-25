'use client';

import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import PropertyListItem from "./PropertyListitems";
import apiService from '@/app/services/Api.Service';
import useSearchModal from '@/app/Hooks/useSearchModal';

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
    is_favorite: boolean;
}

interface PropertyListProps {
    landlord_id?: string | null;
    favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id,
    favorites
}) => {

    const searchModal = useSearchModal();

    const country = searchModal.query.country;
    const numGuests = searchModal.query.guests;
    const numBathrooms = searchModal.query.bathrooms;
    const numBedrooms = searchModal.query.bedrooms;
    const checkinDate = searchModal.query.checkIn;
    const checkoutDate = searchModal.query.checkOut;
    const category = searchModal.query.category;

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const markFavorite = (id: string, is_favorite: boolean) => {
        setProperties(prev =>
            prev.map(property =>
                property.id === id
                    ? { ...property, is_favorite }
                    : property
            )
        );
    };

    const getProperties = async () => {
        let url = '/api/properties/';

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`;
        } else if (favorites) {
            url += '?is_favorites=true';
        } else {
            const params = new URLSearchParams();

            if (country) params.append('country', country);
            if (numGuests) params.append('numGuests', String(numGuests));
            if (numBedrooms) params.append('numBedrooms', String(numBedrooms));
            if (numBathrooms) params.append('numBathrooms', String(numBathrooms));
            if (category) params.append('category', category);
            if (checkinDate) params.append('checkin', format(checkinDate, 'yyyy-MM-dd'));
            if (checkoutDate) params.append('checkout', format(checkoutDate, 'yyyy-MM-dd'));

            const queryString = params.toString();
            if (queryString) {
                url += `?${queryString}`;
            }
        }

        try {
            const response = await apiService.get(url);

            setProperties(
                response.data.map((property: PropertyType) => ({
                    ...property,
                    is_favorite: response.favorites.includes(property.id)
                }))
            );
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    useEffect(() => {
        getProperties();
    }, [
        country,
        numGuests,
        numBedrooms,
        numBathrooms,
        checkinDate,
        checkoutDate,
        category
    ]);

    return (
        <>
            {properties.map((property) => (
                <PropertyListItem
                    key={property.id}
                    property={property}
                    markFavorite={(is_favorite: boolean) =>
                        markFavorite(property.id, is_favorite)
                    }
                />
            ))}
        </>
    );
};

export default PropertyList;